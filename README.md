# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## 🛠️ 1. Setup & Installation

### Copy the environment template and configure your `.env`

```bash
cp .env.example .env
```

Update the `DATABASE` in your `.env` file based on your setup:

```yaml
DATABASE_CONNECTION=postgres
DATABASE_HOST=host.docker.internal
DATABASE_NAME=
DATABASE_USER=
DATABASE_PASSWORD=
DATABASE_PORT=
```

> 💡 **Tip:** Use `host.docker.internal` when your PostgreSQL runs on the Docker host machine

## 🐳 2. Docker Development

### Run application with Docker in seconds:

```bash
# Build the application image
make build

# Start the containers
make run

# View application logs
make logs
# See all available commands
make help
```

App berjalan di <http://localhost:3000/>
