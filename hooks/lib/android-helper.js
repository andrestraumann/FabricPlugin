
var fs = require("fs");
var path = require("path");
var utilities = require("./utilities");

module.exports = {

    addFabricBuildToolsGradle: function() {

        var buildGradle = utilities.readBuildGradle();

        buildGradle +=  [
            "",
            "// Fabric Cordova Plugin - Start Fabric Build Tools ",
            "buildscript {",
            "    repositories {",
            "        maven { url 'https://maven.fabric.io/public' }",
            "    }",
            "    dependencies {",
            "        classpath 'io.fabric.tools:gradle:1.+'",
            "    }",
            "}",
            "",
            "apply plugin: 'io.fabric'",
            "",
            "crashlytics {",
            "    enableNdk true",
            "    androidNdkOut '../../../haxe/mms_native/obj/android-v7'",
            "    androidNdkLibsOut 'libs/armeabi-v7a'",
            "}",
            "",
            "android {",
            "    packagingOptions {",
            "        exclude 'lib/arm64-v8a/libcrashlytics-envelope.so'",
            "        exclude 'lib/arm64-v8a/libcrashlytics.so'",
            "        exclude 'lib/arm64-v8a/libunwind-crashlytics.so'",
            "        exclude 'lib/armeabi/libcrashlytics-envelope.so'",
            "        exclude 'lib/armeabi/libcrashlytics.so'",
            "        exclude 'lib/armeabi/libunwind-crashlytics.so'",
            "        exclude 'lib/mips64/libcrashlytics-envelope.so'",
            "        exclude 'lib/mips64/libcrashlytics.so'",
            "        exclude 'lib/mips64/libunwind-crashlytics.so'",
            "        exclude 'lib/mips/libcrashlytics-envelope.so'",
            "        exclude 'lib/mips/libcrashlytics.so'",
            "        exclude 'lib/mips/libunwind-crashlytics.so'",
            "        exclude 'lib/x86_64/libcrashlytics-envelope.so'",
            "        exclude 'lib/x86_64/libcrashlytics.so'",
            "        exclude 'lib/x86_64/libunwind-crashlytics.so'",
            "    }",
            "}",
            "",
            "// Fabric Cordova Plugin - End Fabric Build Tools",
        ].join("\n");

        utilities.writeBuildGradle(buildGradle);
    },

    removeFabricBuildToolsFromGradle: function() {

        var buildGradle = utilities.readBuildGradle();

        buildGradle = buildGradle.replace(/\n\/\/ Fabric Cordova Plugin - Start Fabric Build Tools[\s\S]*\/\/ Fabric Cordova Plugin - End Fabric Build Tools/, "");

        utilities.writeBuildGradle(buildGradle);
    }
};
