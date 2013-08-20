## Usage

It outputs the version of specified application on the specified platform.

If you want to know the version of 'Clash of Clans' on Android, you check an identifier -- 'jp.anim.wallpaper080901' in this case, in the url of this app on Google Play, and run this script with specifying the app identifier and '--type android' as its option.

    $ ./appver.js 'jp.anim.wallpaper080901' --type android
    1.0.0

and if you want to know it on iOS, check the identifier in the same way and run the script with the identifier and '--type ios' as option.

    $ ./appver.js '529479190' --type ios
    4.74

## Contributing
In lieu of a formal styleguide, take care to maintain the existing coding style. Add unit tests for any new or changed functionality. Lint and test your code using [Grunt](http://gruntjs.com/).

## Release History
_(Nothing yet)_

## License
Copyright (c) 2013 Masami Yonehara
Licensed under the MIT license.
=======
app-version-scraper
===================
