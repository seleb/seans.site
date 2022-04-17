#!/bin/bash
for f in ./public/thumbnails/*/*.png;
	do echo "Processing $f file..";
	npx @squoosh/cli --oxipng auto -d "$(dirname "$f")" "$f"
done

