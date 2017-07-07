
exports.files = {
    javascripts: {
        joinTo: "app.js"
    },
    stylesheets: {
        joinTo: "app.css"
    }
};

exports.plugins = {
    sass: {
        options: {
            includePaths: ["node_modules/bootstrap/scss"]
        }
    },
    purifycss: {
        options: {
            target: {
                src: ["public/index.html"],
                css: ["public/*.css"],
                dest: "public/purestyles.css"
            }
        }
    }
};
