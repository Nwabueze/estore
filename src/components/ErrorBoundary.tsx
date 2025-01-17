import React, { Component, ErrorInfo, ReactNode } from "react";

interface Props { children?: ReactNode }

interface State { hasError: boolean }

class ErrorBoundary extends Component<Props, State> {

  public state: State = {
    hasError: false
  };

  public static getDerivedStateFromError(_: Error): State {
    // Update state so the next render will show the fallback UI.
    return { hasError: true };
  }

  componentDidCatch(error:Error, errorInfo: ErrorInfo) {
    // You can also log the error to an error reporting service
    console.log("Uncaught error:", error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      // You can render any custom fallback UI
      return <div className="p-2">Something went wrong.</div>;
    }

    return this.props.children;
  }
}

export default ErrorBoundary