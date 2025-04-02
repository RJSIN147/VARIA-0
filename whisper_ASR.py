import grpc
from concurrent import futures
import faster_whisper
import soundfile as sf
from asr_pb2 import ASRResponse
import asr_pb2_grpc

class ASRService(asr_pb2_grpc.ASRServiceServicer):
    def __init__(self, model_name="small", compute_type="int8"):
        self.model = faster_whisper.WhisperModel(model_size, device="cuda", compute_type=compute_type)
        self.sample_rate = 1