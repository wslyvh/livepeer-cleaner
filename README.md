# Livepeer Cleaner

A utility tool to clean up Livepeer assets that can't be deleted through the Livepeer Studio UI. This is particularly useful for managing your Livepeer subscription costs, as unused assets may still incur charges.

## Why This Tool?

While Livepeer Studio provides a user interface for managing your assets, it doesn't currently offer a way to bulk delete assets. This tool helps you:

- Delete all assets in your Livepeer account
- Manage your subscription costs by removing unused assets
- Clean up your Livepeer workspace efficiently

## Prerequisites

- [Bun](https://bun.sh/) runtime
- A Livepeer API key

## Setup

1. Clone this repository:

```bash
git clone https://github.com/yourusername/livepeer-cleaner.git
cd livepeer-cleaner
```

2. Install dependencies:

```bash
bun install
```

3. Create a `.env` file in the root directory:

```bash
touch .env
```

4. Add your Livepeer API key to the `.env` file:

```
LIVEPEER_API_KEY=your_api_key_here
```

### Getting a Livepeer API Key

1. Go to [Livepeer Studio](https://livepeer.studio/)
2. Navigate to the API Keys section
3. Create a new API key
4. Copy the key and paste it in your `.env` file

> **Important Security Note**:
>
> - Keep your API key secure and never commit it to version control
> - The `.env` file is already in `.gitignore` to prevent accidental commits
> - API keys have significant privileges, so treat them like passwords

## Usage

Run the cleanup script:

```bash
bun run src/index.ts
```

The script will:

1. Fetch all assets in your Livepeer account
2. Delete them one by one
3. Show progress and any errors during deletion
4. Provide a final count of deleted assets

## Error Handling

The script is designed to:

- Continue even if individual asset deletions fail
- Log any errors that occur during deletion
- Show a summary of successful deletions

## Contributing

Feel free to open issues or submit pull requests for any improvements.

## License

MIT
