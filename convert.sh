#!/bin/bash

for i in ./public/thumbnails/*/preview.gif
	do "c:/Program Files/ffmpeg/bin/ffmpeg.exe" -v 0 -y -i "$i" -movflags faststart -pix_fmt yuv420p -vf "scale=trunc(iw/2)*2:trunc(ih/2)*2" "${i%.*}.mp4";
	sizeGif=`stat -c%s "$i"`
	sizeVid=`stat -c%s "${i%.*}.mp4"`
	echo "compress"
	echo $i $sizeGif
	echo "${i%.*}.mp4" $sizeVid
	if (($sizeGif>$sizeVid));then
		echo "removing gif"
		rm "$i"
	else
		echo "removing vid"
		rm "${i%.*}.mp4"
	fi
done
