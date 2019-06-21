source "https://rubygems.org"

gem "jekyll", "~> 3.8.5"
gem "rake"
gem "just-the-docs", "0.2.3"

group :jekyll_plugins do
  gem "jekyll-feed", "~> 0.6"
end

group :test, :development do
  gem "mdl"
  gem "scss_lint", "~> 0.57.1"
end

# Gems for Windows
gem "tzinfo-data", platforms: [:mingw, :mswin, :jruby]
gem "wdm", "~> 0.1.0" if Gem.win_platform?

ruby "2.5.1"
