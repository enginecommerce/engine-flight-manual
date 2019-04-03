require 'scss_lint/rake_task'

SCSSLint::RakeTask.new do |t|
  t.config = '.scss-lint.yml'
  t.files = Dir.glob([
    "_sass/**/*.scss"
  ])
end

task "assets:precompile" do
  exec("jekyll build")
end

task "md_lint" do
  exec("mdl .")
end

task default: [:scss_lint, :md_lint]
