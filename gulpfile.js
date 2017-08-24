const gulp = require('gulp');
const inlineNg2Template = require('gulp-inline-ng2-template');

gulp.task('inline-build-templates', () => {
  return gulp.src(['./src/app/components/**/*.ts', '!./src/app/components/**/**.spec.ts'])
    .pipe(inlineNg2Template({
      target: 'es5',
      useRelativePaths: true
    }))
    .pipe(gulp.dest('./build'));
});

