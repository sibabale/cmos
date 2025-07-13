# CMOS Test API

A modular Node.js/TypeScript API for testing CMOS (Core Modern Operating System) integration.

## Overview

This is a test project that provides a REST API interface for CMOS account management operations. It's designed to simulate real-world banking and financial services APIs for development and testing purposes.

## Features

- **Account Management**: Balance queries, debits, credits
- **Transaction Processing**: Real-time transaction handling
- **Modular Architecture**: Clean separation of concerns
- **TypeScript**: Full type safety and modern development experience
- **OpenAPI Specification**: Complete API documentation

## Quick Start

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Start production server
npm start
```

## API Endpoints

- `GET /api/v1/accounts/{accountId}/balance` - Get account balance
- `POST /api/v1/accounts/{accountId}/debit` - Debit account
- `POST /api/v1/accounts/{accountId}/credit` - Credit account

## Project Structure

```
src/
├── controllers/     # Request handlers
├── services/        # Business logic
├── routes/          # Route definitions
├── data/           # Mock data files
└── index.ts        # Application entry point
```

## Development

This is a test project for learning and development purposes. All data is mock data and should not be used in production environments.

## License

MIT License - Test project only 