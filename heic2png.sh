#!/usr/bin/env bash
#
# heic2png.sh — Convert HEIC images to PNG using GIMP batch mode.
#
# Usage:
#   ./heic2png.sh [input_dir] [output_dir]
#
#   input_dir   Directory containing .heic/.HEIC files (default: current dir)
#   output_dir  Where to write .png files (default: same as input_dir)

set -euo pipefail

INPUT_DIR="${1:-.}"
OUTPUT_DIR="${2:-$INPUT_DIR}"

if [[ ! -d "$INPUT_DIR" ]]; then
    echo "Error: input directory '$INPUT_DIR' does not exist." >&2
    exit 1
fi

mkdir -p "$OUTPUT_DIR"

# Resolve to absolute paths for GIMP
INPUT_DIR="$(cd "$INPUT_DIR" && pwd)"
OUTPUT_DIR="$(cd "$OUTPUT_DIR" && pwd)"

shopt -s nullglob nocaseglob
files=("$INPUT_DIR"/*.heic)
shopt -u nocaseglob

if [[ ${#files[@]} -eq 0 ]]; then
    echo "No .heic files found in $INPUT_DIR"
    exit 0
fi

echo "Converting ${#files[@]} file(s) from $INPUT_DIR -> $OUTPUT_DIR"

for f in "${files[@]}"; do
    base="$(basename "$f")"
    out="$OUTPUT_DIR/${base%.*}.png"
    echo "  $base -> $(basename "$out")"

    gimp -i -b "
        (let* ((image (car (gimp-file-load RUN-NONINTERACTIVE \"$f\" \"$base\")))
               (drawable (car (gimp-image-flatten image))))
          (file-png-save RUN-NONINTERACTIVE image drawable \"$out\" \"$out\" 0 9 1 1 1 1 1)
          (gimp-image-delete image))
    " -b "(gimp-quit 0)" 2>/dev/null
done

echo "Done."
