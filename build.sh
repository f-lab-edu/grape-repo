#!/bin/sh
set -e  # 스크립트 실행 중 오류 발생 시 중단

# 현재 위치를 기준으로 경로 설정
OUTPUT_DIR=$(pwd)/output
GRAPE_REPO_DIR=$(pwd)/grape-repo

# output 디렉토리 생성
mkdir -p $OUTPUT_DIR

# grape-repo 디렉토리의 내용을 output 디렉토리로 복사
cp -R $GRAPE_REPO_DIR/* $OUTPUT_DIR
