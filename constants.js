const pkg = require('./package.json');

const VERSION = `v${pkg.version}`;

const HELP_TEXT = `
Usage:
    oo [options] command [parameters]

Options:
  -h, --help    Print help
  -v, --version Print version

Commands:
  token           Generates Ooyala player token (OPT) request URL.
  sign            Generates a signature based on given params.
  upload          Uploads file(s).
  remote          Creates a remote asset
  source          Downloads source file to stdout

Syntax:
  oo token embed-code(s) [accountId]
  oo sign url [method body]
  oo upload local-file-path(s) [title chunkSize profile]
  oo remote asset-name [dash hls hds]
  oo source embed-code

Example:
  oo -v
  oo token embed_code
  oo token embed_code1 embed_code2 --accountId david1203
  oo sign /hoge?foo=bar
  oo sign /hoge?foo=bar --body '{"data": {"comment": "This is JSON"}}'
  oo sign /hoge?foo=bar --body '{"data": {"comment": "This is JSON"}}' --method PATCH
  oo upload ./path/to/file --title "My video"
  oo upload ./path/to/files/*.mp4 --title "My videos" --chunkSize 1024 --profile abc
  oo remote "My remote asset" --dash http://x.jp/a.mpd --hls http://x.jp/a.m3u8 --hds http://x.jp/a.f4m
  oo source embed_code1 > file1

Parameters:
  accountId     Viewer's login id (default = undefined)
  method        (GET | POST | PUT | DELETE | PATCH) default = GET
  body          Body string (default = '')
  title         Title of the video (default = {file name} if multiple files are specified, the title is suffixed by '- part n')
  chunkSize     Byte size of each chunk (default = 204800)
  profile       Profile id used for encoding
  dash          Remote asset URL for MPEG-DASH
  hls           Remote asset URL for HTTP Live Streaming
  hds           Remote asset URL for HTTP Dynamic Streaming
`;

const CONFIG_HELP_TEXT = `
Please put config file(s) in your work directory.
 $ mkdir config
 $ vi config/default.json
 {
   "api": {
     "key":        "Your Ooyala API Key",
     "secret":     "Your Ooyala API Secret"
   }
 }
`;

module.exports = {
  VERSION,
  HELP_TEXT,
  CONFIG_HELP_TEXT
};
