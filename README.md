# Media Player + Drop Zone

## Media Player

- react-player lib 을 커스텀하였습니다.
- play, pause, volume, seek 기능이 가능합니다.
- screenFull.js lib 을 활용하여 full screen 기능을 추가하였습니다.
- 16:9 비율을 유지하는 기능을 추가하였습니다.

## Drop zone

- Drag Event 를 활용하여 Dropzone 컴포넌트를 생성하였습니다.
- 파일을 드래그하면 컴포넌트가 보이고 드랍을 하면 컴포넌트가 미디어 컴포넌트의 source url 로 저장됩니다.
- server로 파일을 업로드하는 방식이 아니고 createObjectURL 을 사용하여 드랍된 파일의 url 을 사용합니다.
