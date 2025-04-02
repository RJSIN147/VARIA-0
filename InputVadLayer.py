import pyaudio
import numpy as np
import webrtcvad
import wave

class AudioStream:
    def __init__(self, rate=16000, chunk_size=320, vad_mode=3):
        self.rate = rate
        self.chunk_size = chunk_size
        self.vad = webrtcvad.Vad(vad_mode)
        self.audio = pyaudio.PyAudio()

        self.stream = self.audio.open(
            format=pyaudio.paInt16,
            channels=1,
            rate=self.rate,
            input=True,
            frames_per_buffer=self.chunk_size
        )

    def is_speech(self, frame):
        return self.vad.is_speech(frame, self.rate)

    def capture_audio(self):
        print("Listening...")
        speech_frames = []
        silence_count = 0
        silence_threshold = 20

        while True:
            frame = self.stream.read(self.chunk_size, exception_on_overflow=False)
            if self.is_speech(frame):
                speech_frames.append(frame)
                silence_count = 0
            else:
                silence_count += 1
                if silence_count > silence_threshold and speech_frames:
                    print("Speech Detected, precessing...")
                    self.process_audio(speech_frames)
                    speech_frames = []

    def process_audio(self, frames):
        audio_data = b''.join(frames)
        audio_np = np.frombuffer(audio_data, dtype=np.int16)
        print(len(audio_np))

    def close(self):
        self.stream.stop_stream()
        self.stream.close()
        self.audio.terminate()

if __name__ == "__main__":
    audio_stream = AudioStream()
    try:
        audio_stream.capture_audio()
    except KeyboardInterrupt:
        audio_stream.close()