"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { api } from "@/lib/api";
import { ApiError } from "@/lib/api";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { Input } from "@/components/ui/Input";
import { Badge } from "@/components/ui/Badge";
import { Loading } from "@/components/ui/Loading";

export default function NewTaskPage() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [status, setStatus] = useState("PENDING");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    if (!title.trim()) {
      setError("Task title is required");
      setLoading(false);
      return;
    }

    try {
      await api.createTask({
        title: title.trim(),
        description: description.trim() || undefined,
        status,
      });
      router.push("/dashboard");
    } catch (err) {
      if (err instanceof ApiError) {
        setError(err.message);
      } else {
        setError("Failed to create task");
      }
    } finally {
      setLoading(false);
    }
  };

  const statusOptions = [
    {
      value: "PENDING",
      label: "Pending",
      icon: "",
      variant: "pending" as const,
    },
    {
      value: "IN_PROGRESS",
      label: "In Progress",
      icon: "",
      variant: "progress" as const,
    },
    {
      value: "COMPLETED",
      label: "Completed",
      icon: "",
      variant: "completed" as const,
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      {/* Header */}
      <div className="bg-white/80 backdrop-blur-md shadow-sm border-b border-white/20">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-6">
            <div className="flex items-center space-x-4">
              <Button
                onClick={() => router.push("/dashboard")}
                variant="ghost"
                size="icon"
                className="text-gray-600 hover:text-gray-900"
              >
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 19l-7-7 7-7"
                  />
                </svg>
              </Button>
              <div>
                <h1 className="text-2xl font-bold text-gray-900 animate-fade-in">
                  Create New Task
                </h1>
                <p className="text-sm text-gray-600">
                  Add a new task to your dashboard
                </p>
              </div>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center">
                <span className="text-blue-600 text-sm">📋</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Progress indicator */}
        <div className="mb-8 animate-fade-in">
          <div className="flex items-center justify-between mb-2">
            <span className="text-sm font-medium text-gray-700">
              Task Creation Progress
            </span>
            <span className="text-sm text-gray-500">Step 1 of 1</span>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-2">
            <div
              className="bg-gradient-to-r from-blue-600 to-indigo-600 h-2 rounded-full animate-fade-in"
              style={{ width: "100%" }}
            ></div>
          </div>
        </div>

        {/* Main form card */}
        <Card
          className="animate-fade-in card-hover"
          style={{ animationDelay: "0.2s" }}
        >
          <CardHeader className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white">
            <CardTitle className="flex items-center">
              <span className="mr-2">✨</span>
              Task Details
            </CardTitle>
          </CardHeader>

          <CardContent className="p-6">
            <form onSubmit={handleSubmit} className="space-y-6">
              {error && (
                <div className="bg-red-50 border-l-4 border-red-400 text-red-700 px-4 py-3 rounded-lg animate-fade-in">
                  <div className="flex">
                    <div className="flex-shrink-0">
                      <svg
                        className="h-5 w-5 text-red-400"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fillRule="evenodd"
                          d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </div>
                    <div className="ml-3">
                      <p className="text-sm">{error}</p>
                    </div>
                  </div>
                </div>
              )}

              {/* Title field */}
              <div className="space-y-2">
                <label
                  htmlFor="title"
                  className="block text-sm font-medium text-gray-700"
                >
                  Task Title <span className="text-red-500">*</span>
                </label>
                <div className="relative">
                  <Input
                    id="title"
                    type="text"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    placeholder="Enter task title"
                    required
                    className="pl-10"
                  />
                  <div className="absolute inset-y-0 left-0 flex items-center pl-3">
                    <span className="text-gray-400">📝</span>
                  </div>
                </div>
                <p className="text-xs text-gray-500">
                  Give your task a clear, descriptive title
                </p>
              </div>

              {/* Description field */}
              <div className="space-y-2">
                <label
                  htmlFor="description"
                  className="block text-sm font-medium text-gray-700"
                >
                  Description
                </label>
                <div className="relative">
                  <textarea
                    id="description"
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    rows={4}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 resize-none"
                    placeholder="Add more details about your task (optional)"
                  />
                  <div className="absolute top-3 right-3">
                    <span className="text-gray-400">📄</span>
                  </div>
                </div>
                <p className="text-xs text-gray-500">
                  Optional: Add additional context or requirements
                </p>
              </div>

              {/* Status field */}
              <div className="space-y-2">
                <label
                  htmlFor="status"
                  className="block text-sm font-medium text-gray-700"
                >
                  Initial Status
                </label>
                <div className="grid grid-cols-3 gap-3">
                  {statusOptions.map((option) => (
                    <label
                      key={option.value}
                      className={`relative flex flex-col items-center justify-center p-3 border-2 rounded-lg cursor-pointer transition-all ${
                        status === option.value
                          ? "bg-white border-blue-500 shadow-md"
                          : "bg-white border-gray-200 hover:border-gray-300"
                      }`}
                    >
                      <input
                        type="radio"
                        name="status"
                        value={option.value}
                        checked={status === option.value}
                        onChange={(e) => setStatus(e.target.value)}
                        className="sr-only"
                      />
                      <span className="text-2xl mb-1">{option.icon}</span>
                      <Badge variant={option.variant} className="mb-2">
                        {option.label}
                      </Badge>
                    </label>
                  ))}
                </div>
              </div>

              {/* Action buttons */}
              <div className="flex justify-between items-center pt-6 border-t border-gray-200">
                <Button
                  type="button"
                  onClick={() => router.push("/dashboard")}
                  variant="outline"
                >
                  Cancel
                </Button>
                <Button
                  type="submit"
                  loading={loading}
                  className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white"
                >
                  {loading ? "Creating Task..." : "Create Task"}
                </Button>
              </div>
            </form>
          </CardContent>
        </Card>

        {/* Tips card */}
        <Card
          className="mt-6 animate-fade-in"
          style={{ animationDelay: "0.4s" }}
        >
          <CardContent className="p-6">
            <div className="flex">
              <div className="flex-shrink-0">
                <svg
                  className="h-5 w-5 text-blue-400"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
              <div className="ml-3">
                <h3 className="text-sm font-medium text-blue-800">Pro Tip</h3>
                <p className="mt-1 text-sm text-blue-700">
                  Start with a clear, action-oriented title. Add details in the
                  description to provide context for your task.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
