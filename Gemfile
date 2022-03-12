# frozen_string_literal: true

source "https://rubygems.org"

gemspec

gem "html-proofer", "~> 3.18"

# Windows and JRuby does not include zoneinfo files, so bundle the tzinfo-data gem
# and associated library.
install_if -> { RUBY_PLATFORM =~ %r!mingw|mswin|java! } do
  gem "tzinfo", "~> 1.2"
  gem "tzinfo-data"
end

# Performance-booster for watching directories on Windows
gem "wdm", "~> 0.1.1", :install_if => Gem.win_platform?

# Jekyll <= 4.2.0 compatibility with Ruby 3.0

gem "jekyll", github: "jekyll/jekyll"
gem "liquid-c"

group :jekyll_plugins do
  gem "jekyll-archives"
  gem "jekyll-feed"
  gem "jekyll-remote-theme"
  gem "jekyll-seo-tag"
  gem "jekyll-sitemap"
  gem 'jekyll-org', '>= 1.1.0'
  gem 'jekyll-toc'
  gem "jekyll-commonmark"
  gem "jekyll-include-cache"
end

gem "webrick", "~> 1.7"
