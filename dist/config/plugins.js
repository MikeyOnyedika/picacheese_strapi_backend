"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function plugins({ env }) {
    return {
        upload: {
            config: {
                provider: "cloudinary",
                providerOptions: {
                    cloud_name: env("CLOUDINARY_NAME"),
                    api_key: env("CLOUDINARY_KEY"),
                    api_secret: env("CLOUDINARY_SECRET"),
                },
                actionOptions: {
                    uploadStream: {
                        folder: env("CLOUDINARY_FOLDER")
                    },
                    delete: {}
                }
            },
        },
    };
}
exports.default = plugins;
