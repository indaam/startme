# Require any additional compass plugins here.

# Set this to the root of your project when deployed:

$dir = "first";

http_path = "/"
css_dir = "work/"+$dir+"/dist/assets/css"
sass_dir = "work/"+$dir+"/dev/css"
images_dir = "work/"+$dir+"/dev/img"
# javascripts_dir = "work/"+$dir+"/assets/js"

# You can select your preferred output style here (can be overridden via the command line):
# output_style = :expanded or :nested or :compact or :compressed
output_style = :compact
# To enable relative paths to assets via compass helper functions. Uncomment:
relative_assets = true

# To disable debugging comments that display the original location of your selectors. Uncomment:
line_comments = true


# If you prefer the indented syntax, you might want to regenerate this
# project again passing --syntax sass, or you can uncomment this:
# preferred_syntax = :sass
# and then run:
# sass-convert -R --from scss --to sass sass scss && rm -rf sass && mv scss sass
