# exif-tags

[![js-standard-style](https://img.shields.io/badge/code%20style-standard-brightgreen.svg)](http://standardjs.com) [![dependencies Status](https://david-dm.org/Piu130/exif-tags/status.svg)](https://david-dm.org/Piu130/exif-tags) [![devDependencies Status](https://david-dm.org/Piu130/exif-tags/dev-status.svg)](https://david-dm.org/Piu130/exif-tags?type=dev)

This library provides exif tags and it's identifier.

| Name | Type | Description |
| :--- | :--- | :---------- |
| jpegStartNumber | number | Indicates start of a JPEG. |
| exifString | number | Hex value for &#x27;Exif&#x27;. |
| exifStartNumber | number | Indicates start of the EXIF attribute. |
| bigEndianIndicator | number | Hex value for &#x27;MM&#x27;. This indicates big endian. |
| littleEndianIndicator | number | Hex value for &#x27;II&#x27;. This indicates little endian. |
| allTagsFull | Object.&lt;number, Tag&gt; | All tags with additional values. |
| exifIfdTags | Object.&lt;number, string&gt; | EXIF IFD tags. |
| exifPointerTags | Object.&lt;number, string&gt; | EXIF pointer tags. |
| gpsTags | Object.&lt;number, string&gt; | GPS tags. |
| tiffTags | Object.&lt;number, string&gt; | TIFF tags. |
| allTags | Object.&lt;number, string&gt; | All EXIF tags in a single object. |
| Tag | object | Represents a tag with id, name, group and category. |
