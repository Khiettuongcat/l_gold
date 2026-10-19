import json
from datetime import datetime
from pathlib import Path

from fastapi import FastAPI, Request

app = FastAPI()

LOG_DIR = Path("logs")
LOG_DIR.mkdir(exist_ok=True)


def save(name: str, data: dict):
    # mỗi dòng 1 JSON (jsonl), dễ đọc lại bằng Python
    file = LOG_DIR / f"{name}.jsonl"
    with file.open("a", encoding="utf-8") as f:
        f.write(json.dumps(data, ensure_ascii=False) + "\n")


@app.post("/{name}")
async def receive(name: str, request: Request):
    data = await request.json()
    data["_received_at"] = datetime.now().isoformat()

    # nếu body là chuỗi JSON thì parse ra cho dễ xem
    body = data.get("body")
    if isinstance(body, str):
        try:
            data["body"] = json.loads(body)
        except ValueError:
            pass

    save(name, data)
    print(f"[{name}] {data.get('method', '')} {data.get('url', '')} -> {data.get('status', '')}")
    return {"ok": True}


@app.get("/")
def health():
    return {"status": "running"}