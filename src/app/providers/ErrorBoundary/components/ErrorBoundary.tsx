import React, { ErrorInfo } from 'react';
import { PageError } from 'widgets/PageError';

interface ErrorBoundaryProps {
  children: React.ReactNode;
}

interface ErrorBoundaryState {
  hasError: boolean;
}

class ErrorBoundary extends React.Component<ErrorBoundaryProps, ErrorBoundaryState> {
  constructor(props: ErrorBoundaryProps) {
    super(props);
    this.state = { 'hasError': false };
  }

  static getDerivedStateFromError(error: Error): ErrorBoundaryState {
    // Update state so the next render will show the fallback UI.
    return { 'hasError': true };
  }

  componentDidCatch(error: Error, info: ErrorInfo) {
    console.log('Error occurred:', error);
  }

  render() {
    const { children } = this.props;
    const { hasError } = this.state;

    if (hasError) {
      return <PageError />;
    }

    return children;
  }
}

export default ErrorBoundary;
