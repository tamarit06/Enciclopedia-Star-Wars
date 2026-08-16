from fastapi import FastAPI
from fastapi.staticfiles import StaticFiles
from fastapi.responses import FileResponse
from app.routes import router
from fastapi.middleware.cors import CORSMiddleware
from pathlib import Path

app = FastAPI()



app.include_router(router)


# Ruta hacia frontend/dist
BASE_DIR = Path(__file__).resolve().parent.parent.parent
FRONTEND_DIST = BASE_DIR / "frontend" / "dist"

# Servir archivos de React
app.mount(
    "/assets",
    StaticFiles(directory=FRONTEND_DIST / "assets"),
    name="assets",
)


@app.get("/{full_path:path}")
def serve_react(full_path: str):
    file_path = FRONTEND_DIST / full_path

    if file_path.is_file():
        return FileResponse(file_path)

    return FileResponse(FRONTEND_DIST / "index.html")