/* @remove-on-es-build-begin */
// 如果使用了https://github.com/ant-design/babel-plugin-import，则这个index.js文件就没有作用了。
const ENV = process.env.NODE_ENV;
if (
    ENV !== 'production' &&
    ENV !== 'test'
) {
    // eslint-disable-next-line no-console
    console.warn(
        '你正在使用rui-mobile的整个包，' +
        '请使用https://www.npmjs.com/package/babel-plugin-import做按需加载，以减少包的大小',
    );
}
/* @remove-on-es-build-end */

export { default as Affix } from './affix';
