import React,{Component} from 'react'
import {View, Button, Image,Text} from 'react-native'
import ImagePicker from 'react-native-image-picker'
var photoOptions = {
  //底部弹出框选项
  title: '请选择',
  cancelButtonTitle: '取消',
  takePhotoButtonTitle: '拍照',
  chooseFromLibraryButtonTitle: '选择相册',
  quality: 0.75,  // 照片质量
  allowsEditing: true, // 可编辑
  noData: false,  // 拍照不附带日期
  storageOptions: {
    skipBackup: true,  // ios下 会把照片同步到云端存储，true 则不同步
    path: 'images'
  }
}
export default class Me extends Component{
  constructor(props) {
    super(props);
    this.state = {
      imgURL: 'http://placekitten.com/200/198'
    }
  }
  render(){
    return <View style={{alignItems:'center',paddingTop:70}}>
      <Image source={{ uri: this.state.imgURL }} style={{ width: 200, height: 200,borderRadius:100 }}></Image>
      <Button title="拍照" onPress={this.cameraAction}></Button>
      <Text>this is me</Text>
    </View>
  }
  cameraAction = () => {
    ImagePicker.showImagePicker(photoOptions, (response) => {
      console.log('response' + response);
      if (response.didCancel) {
        return
      }
      this.setState({
        imgURL: response.uri
      });
    })
  }
}