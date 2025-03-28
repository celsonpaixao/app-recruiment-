import React, { Component, ReactNode } from "react";
import { View, Text } from "react-native";

interface ErrorBoundaryProps {
  children: ReactNode;
}

interface ErrorBoundaryState {
  hasError: boolean;
  error: Error | null;
}

class ErrorBoundary extends Component<ErrorBoundaryProps, ErrorBoundaryState> {
  constructor(props: ErrorBoundaryProps) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error: Error) {
    return { hasError: true, error };
  }

  componentDidCatch(error: Error, errorInfo: any) {
    console.error("Error caught by ErrorBoundary:", error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <View style={{ padding: 20 }}>
          <Text style={{ color: "red", fontSize: 16 }}>
            Ocorreu um erro inesperado.
          </Text>
          <Text style={{ color: "red", fontSize: 12 }}>
            {String(this.state.error)}
          </Text>
        </View>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
