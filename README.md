This is the GitHub repository of my personal website, which you can find here: [julius-busch.com](https://julius-busch.com)

## 🛠️ Tech Stack
- Language: TypeScript
- Framework: Next.js, React
- Key-Value Database: Redis


## 🧩 Project Structure

```yaml
app/
    (routes)/
    components/ # components used in the routes
    content/ # contains the text used in the sections on the home page
    hooks/ # custom hooks
    lib/ # other reusable logic
    ui/ # custom UI components like <Button>, or <TextArea>
public/ # public files
redis/ # Redis configuration .env and docker-compose
    .env
    docker-compose.yml
.env
package.json
```


## 📦 Installation

### 1. Prerequisites

- Node.js (recommended: 24)
- Docker

Clone the repository:
```
git clone https://github.com/julii-b/portfolio-website.git
cd portfolio-website
```

### 2. Copy the environment file

On Linux:
```bash
cp .env.example .env
```
On Windows:
```
copy .env.example .env
```

Then open `.env` and set your own values for all variables with the comment `#change this`

### 3. Copy the Redis environment file

On Linux:
```bash
cd redis
cp .env.example .env
```
On Windows:
```
cd redis
copy .env.example .env
```

Then open `redis/.env` and set your own values for all variables with the comment `#change this`

### 4. Start Redis

```
docker compose up -d
```

Wait until Redis is ready.

### 5. Install dependencies and start server

```
cd ..
npm install
npm run dev
```

Now you can access it at [localhost:3001](http://localhost:3001) or at [julius-busch.com](https://julius-busch.com) 