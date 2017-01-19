
import { src, dest, watch, parallel, series, lastRun } from 'gulp'

export const buildFonts = () => src('./src/fonts/*.*')
       .pipe(dest('./build/fonts'))