# Contributing to BuddyJS

Thank you for your interest in contributing to BuddyJS! This document provides guidelines and instructions for contributing to the project.

## Table of Contents

- [Code of Conduct](#code-of-conduct)
- [Getting Started](#getting-started)
- [How to Contribute](#how-to-contribute)
- [Development Setup](#development-setup)
- [Coding Standards](#coding-standards)
- [Testing](#testing)
- [Submitting Changes](#submitting-changes)
- [Reporting Bugs](#reporting-bugs)
- [Suggesting Enhancements](#suggesting-enhancements)

## Code of Conduct

By participating in this project, you agree to maintain a respectful and inclusive environment for all contributors. We expect all participants to:

- Use welcoming and inclusive language
- Be respectful of differing viewpoints and experiences
- Accept constructive criticism gracefully
- Focus on what is best for the community
- Show empathy towards other community members

## Getting Started

Before you begin contributing, please:

1. Fork the repository on GitHub
2. Clone your fork locally
3. Read through the [README.md](README.md) to understand the project
4. Check the [Issues](https://github.com/FCzajkowski/BuddyJS/issues) page for open tasks

## How to Contribute

There are many ways to contribute to BuddyJS:

- **Bug Reports**: Submit detailed bug reports with reproduction steps
- **Feature Requests**: Propose new features or enhancements
- **Code Contributions**: Fix bugs, implement features, or improve documentation
- **Documentation**: Improve existing docs or add examples
- **Testing**: Write tests or improve test coverage
- **Code Review**: Review pull requests from other contributors

## Development Setup

1. **Clone the repository**
   ```bash
   git clone https://github.com/YOUR-USERNAME/BuddyJS.git
   cd BuddyJS
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Create a new branch**
   ```bash
   git checkout -b feature/your-feature-name
   ```
   or
   ```bash
   git checkout -b fix/your-bug-fix
   ```

4. **Run the project**
   ```bash
   npm start
   ```

## Coding Standards

To maintain code quality and consistency, please follow these guidelines:

### JavaScript Style

- Use ES6+ features where appropriate
- Use meaningful variable and function names
- Follow camelCase naming convention for variables and functions
- Use PascalCase for class names
- Add comments for complex logic
- Keep functions small and focused on a single responsibility

### Code Formatting

- Use 2 spaces for indentation
- Use semicolons
- Maximum line length: 100 characters
- Use single quotes for strings unless interpolation is needed

### Example

```javascript
// Good
function detectMagicNumbers(ast) {
  const magicNumbers = [];
  
  ast.traverse({
    Literal(node) {
      if (typeof node.value === 'number' && !isAllowedNumber(node.value)) {
        magicNumbers.push(node);
      }
    }
  });
  
  return magicNumbers;
}

// Avoid
function d(a){var m=[];a.traverse({Literal(n){if(typeof n.value==='number'&&!i(n.value)){m.push(n)}}});return m}
```

## Testing

- Write tests for all new features and bug fixes
- Ensure all tests pass before submitting a pull request
- Run tests with: `npm test`
- Aim for high test coverage, especially for detector logic

### Writing Tests

```javascript
describe('Magic Number Detector', () => {
  it('should detect magic numbers in code', () => {
    const code = 'const x = 42;';
    const result = detectMagicNumbers(code);
    expect(result).toHaveLength(1);
  });
});
```

## Submitting Changes

1. **Commit your changes**
   ```bash
   git add .
   git commit -m "Brief description of your changes"
   ```

   Follow these commit message guidelines:
   - Use the present tense ("Add feature" not "Added feature")
   - Use the imperative mood ("Move cursor to..." not "Moves cursor to...")
   - Limit the first line to 72 characters
   - Reference issues and pull requests when relevant

   Examples:
   ```
   Add detection for unused variables
   Fix regex pattern detection bug
   Update documentation for custom detectors
   ```

2. **Push to your fork**
   ```bash
   git push origin feature/your-feature-name
   ```

3. **Create a Pull Request**
   - Go to the original BuddyJS repository
   - Click "New Pull Request"
   - Select your fork and branch
   - Fill out the PR template with:
     - Description of changes
     - Related issue numbers
     - Testing performed
     - Screenshots (if applicable)

4. **Code Review**
   - Wait for maintainer review
   - Address any requested changes
   - Keep the discussion focused and professional

## Reporting Bugs

When reporting bugs, please include:

- **Clear title**: Brief description of the issue
- **Description**: Detailed explanation of the problem
- **Steps to reproduce**: Numbered steps to recreate the bug
- **Expected behavior**: What should happen
- **Actual behavior**: What actually happens
- **Environment**: Node version, OS, BuddyJS version
- **Code sample**: Minimal reproducible example
- **Screenshots**: If applicable

### Bug Report Template

```markdown
**Describe the bug**
A clear description of what the bug is.

**To Reproduce**
Steps to reproduce the behavior:
1. Run '...'
2. With code '...'
3. See error

**Expected behavior**
What you expected to happen.

**Environment**
- OS: [e.g., macOS 12.0]
- Node version: [e.g., 18.0.0]
- BuddyJS version: [e.g., 0.5.0]

**Additional context**
Any other relevant information.
```

## Suggesting Enhancements

We welcome feature requests and enhancement suggestions! When suggesting enhancements:

- **Check existing issues** to avoid duplicates
- **Provide a clear use case** explaining why the feature would be useful
- **Describe the desired behavior** in detail
- **Consider implementation** if you have ideas about how it could work
- **Be open to discussion** about the feature's scope and implementation

### Enhancement Request Template

```markdown
**Feature description**
A clear description of the feature you'd like to see.

**Use case**
Explain why this feature would be valuable.

**Proposed solution**
How you envision this working.

**Alternatives considered**
Other approaches you've thought about.
```

## Additional Notes

### Detector Development

When creating new detectors:

- Follow the existing detector pattern
- Include comprehensive tests
- Document the detector's purpose and behavior
- Consider performance implications
- Handle edge cases

### Documentation

- Update README.md if adding new features
- Add JSDoc comments for public APIs
- Include code examples in documentation
- Keep documentation concise and clear

## Questions?

If you have questions about contributing, feel free to:

- Open an issue with the `question` label
- Reach out to the maintainers
- Check existing issues and discussions

Thank you for contributing to BuddyJS! Your efforts help make static code analysis better for everyone.
