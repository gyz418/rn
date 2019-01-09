## 0 一修改android目录，就要重新打包 react-native run-android
### 0.1安装jdk8  安装目录：d:soft 配置系统变量
  > JAVA_HOME:  D:\soft\jdk1.8.0_121
  
  > 新增 path  %JAVA_HOME%\bin;%JAVA_HOME%\jre\bin;
  
  > CLASSPATH .;JAVA_HOME%\lib\dt.jar;%JAVA_HOME%\lib\tools.jar;
  
### 0.2.python rn用到  add python.exe to Path  
  > cmd： python 安装成功
  
### 0.3 安装android sdk manager 可如下配置安卓环境 
  1. 安装`installer_r24.3.4-windows.exe`，假设安装到C盘下的android目录
  3. 解压`platform-tools`，放到`platform-tools`文件夹下
  4. `android sdk manager` 安装 `Android SDK Build-tools 27.0.3`、`SDK Platform 27`
  5. 在安装目录中，新建`extras`文件夹，在`extras`文件夹下新建`android`文件夹；解压`m2responsitory`文件夹和`support`文件夹，放到新建的`extras -> android`文件夹下
  6. 配置安装环境变量：在系统环境变量中新建`ANDROID_HOME`，值为android SDK Manager的安装路径`D:soft\android-sdk`，紧接着，在Path中新增`;%ANDROID_HOME%\tools;%ANDROID_HOME%\platform-tools;`
### 0.4 npm i -g react-native-cli  rn推荐用yarn安装，比npm快

## 1 react-native init rn1224   react-native run-android
  > 打包好的文件，放到了`android\app\build\outputs\apk`目录下
  
## 2 打开total control 连接手机

  `adb devices`  android开发环境下查看电脑连接的手机设备
  
  `react-native start`  重启 rn 编绎器,
  
  `Dev Settings->Debug server host & port for device-> 192.168.0.114:8081` 设置Ip

## 3 发布apk 
 - [ReactNative之Android打包APK方法（趟坑过程）](http://www.jianshu.com/p/1380d4c8b596)
 - [React Native发布APP之签名打包APK](http://blog.csdn.net/fengyuzhengfan/article/details/51958848)
 
### 3.1 cmd下生成签名
  > `keytool -genkey -v -keystore my-release-key2.keystore -alias my-key-alias2 -keyalg RSA -keysize 2048 -validity 10000`
  + `my-release-key2.keystore` 签名文件的名称，可自定义
  + `my-key-alias2` 可自定义
  + 签名有效期 10000天  可自改
  + 密码 123456  名字 kang  组织单位名称 personal  组织名称 jia  zh-cn  是
  + 生成的签名文件保存在 c盘用户，文件名： `my-release-key2.keystore`
  + 签名证书copy到 android/app目录下  
  
### 3.2  编辑 `android` -> `gradle.properties`文件，在最后，添加如下代码：
```
MYAPP_RELEASE_STORE_FILE=your keystore filename   xx.keystore 后缀名要加上
MYAPP_RELEASE_KEY_ALIAS=your keystore alias
MYAPP_RELEASE_STORE_PASSWORD=*****
MYAPP_RELEASE_KEY_PASSWORD=*****
```
### 3.3 编辑 android/app/build.gradle文件添加如下代码：
> +号为新增的代码
 ```
 ...
 android {
     ...
     defaultConfig { ... }
     + signingConfigs {
     +    release {
     +        storeFile file(MYAPP_RELEASE_STORE_FILE)
     +        storePassword MYAPP_RELEASE_STORE_PASSWORD
     +        keyAlias MYAPP_RELEASE_KEY_ALIAS
     +        keyPassword MYAPP_RELEASE_KEY_PASSWORD
     +    }
     +}
     buildTypes {
         release {
             ...
     +        signingConfig signingConfigs.release
         }
     }
 }
 ...
 ```
### 3.4  进入项目根目录下的`android`文件夹，在当前目录打开终端，然后输入`./gradlew assembleRelease`开始发布APK的Release版；
> 直接用 cmd 会报错， 用git
### 3.5 项目的`android\app\build\outputs\apk`目录中，找到`app-release.apk` 这就是最后可以上线的apk
### 3.6 调用手机拍照功能
> yarn add react-native-image-picker

> cmd: `react-native link` 自动注册相关的组件到原生配置中

+ 3.6.1 打开项目中的`android`->`app`->`src`->`main`->`AndroidManifest.xml`文件，在第8行添加如下配置：
```
 <uses-permission android:name="android.permission.CAMERA" />
 <uses-permission android:name="android.permission.WRITE_EXTERNAL_STORAGE"/>
```
+ 3.6.2打开项目中的`android`->`app`->`src`->`main`->`java`->`com`->`当前项目名称文件夹`->`MainActivity.java`文件，修改配置如下：
```
package com.native_camera;
import com.facebook.react.ReactActivity;

// 1. 添加以下两行：
import com.imagepicker.permissions.OnImagePickerPermissionsCallback; // <- add this import
import com.facebook.react.modules.core.PermissionListener; // <- add this import

public class MainActivity extends ReactActivity {
   // 2. 添加如下一行：
   private PermissionListener listener; // <- add this attribute

   /**
    * Returns the name of the main component registered from JavaScript.
    * This is used to schedule rendering of the component.
    */
   @Override
   protected String getMainComponentName() {
       return "native_camera";
   }
}
```