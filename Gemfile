source "https://rubygems.org"

ruby "2.4.2"

git_source(:github) do |repo_name|
  repo_name = "#{repo_name}/#{repo_name}" unless repo_name.include?("/")
  "https://github.com/#{repo_name}.git"
end

gem "bootstrap-kaminari-views"
gem "cancancan", "~> 2.0"
gem "carrierwave", github: "carrierwaveuploader/carrierwave"
gem "chartkick"
gem "closure_tree"
gem "coffee-rails", "~> 4.2"
gem "config"
gem "devise"
gem "faker"
gem "figaro"
gem "font-awesome-rails", "~> 4.7", ">= 4.7.0.4"
gem "friendly_id", "~> 5.1.0"
gem "groupdate"
gem "i18n-js"
gem "jbuilder", "~> 2.5"
gem "jquery-rails"
gem "jquery-slick-rails"
gem "kaminari"
gem "omniauth-google-oauth2"
gem "puma", "~> 3.7"
gem "rails", "~> 5.1.4"
gem "ransack", github: "activerecord-hackery/ransack"
gem "roo"
gem "sass-rails", "~> 5.0"
gem "simple_form"
gem "social-share-button"
gem "turbolinks", "~> 5"
gem "uglifier", ">= 1.3.0"
gem "pg"

group :development, :test do
  gem "byebug", platforms: [:mri, :mingw, :x64_mingw]
  gem "capybara", "~> 2.13"
  gem "selenium-webdriver"
end

group :development do
  gem "listen", ">= 3.0.5", "< 3.2"
  gem "spring"
  gem "spring-watcher-listen", "~> 2.0.0"
  gem "web-console", ">= 3.3.0"
end

group :production do
  # gem "rails12_factor"
end

gem "tzinfo-data", platforms: [:mingw, :mswin, :x64_mingw, :jruby]
