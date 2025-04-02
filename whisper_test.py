import sounddevice as sd
import numpy as np
from faster_whisper import WhisperModel

# Load Whisper Model (small/int8 for real-time, adjust as needed)
model = WhisperModel("small", compute_type="int8")

# Audio Stream Parameters
SAMPLE_RATE = 16000  # Whisper requires 16kHz
BUFFER_SIZE = 4096  # Adjust buffer for lower latency

def callback(indata, frames, time, status):
    if status:
        print(status, flush=True)
    audio_data = np.frombuffer(indata, dtype=np.int16).astype(np.float32) / 32768.0
    segments, _ = model.transcribe(audio_data)
    for segment in segments:
        print("Transcription:", segment.text)

# Start Real-time Streaming
with sd.InputStream(samplerate=SAMPLE_RATE, blocksize=BUFFER_SIZE, dtype='int16', channels=1, callback=callback):
    print("Listening...")
    input()  # Keep running until user presses Enter
