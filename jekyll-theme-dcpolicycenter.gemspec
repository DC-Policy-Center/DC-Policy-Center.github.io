# encoding: utf-8

Gem::Specification.new do |s|
  s.name          = "jekyll-theme-dcpolicycenter"
  s.version       = "0.0.4"
  s.license       = "CC0-1.0"
  s.authors       = [""]
  s.email         = ["data@dcpolicycenter.org"]
  s.homepage      = "https://github.com/pages-themes/cayman"
  s.summary       = "dcpolicycenter Jekyll theme is initally based off of the Cayman Jekyll theme for GitHub Pages"

  s.files         = `git ls-files -z`.split("\x0").select do |f|
    f.match(%r{^((_includes|_layouts|_sass|assets)/|(LICENSE|README)((\.(txt|md|markdown)|$)))}i)
  end

  s.platform      = Gem::Platform::RUBY
  s.add_runtime_dependency "jekyll", "~> 3.6.3"
end
