import React, { Component } from 'react'
import { connect } from 'react-redux'
import {
    View,
    Text,
    StyleSheet,
    TouchableOpacity,
    TextInput,
    Image,
    Dimensions,
    Platform,
    ScrollView,
    Alert,
} from 'react-native'
import { launchImageLibrary, launchCamera } from 'react-native-image-picker'
import { addPost } from '../store/actions/posts'

const noUser = 'Você precisa estar logado para adicionar imagens'

class AddPhoto extends Component {
    options = {
        mediaType: 'photo',
        saveToPhotos: true,
        includeBase64: true
    }
    state = {
        uri:  "file:/",
        comment: ''
    }

    componentDidUpdate = prevProps => {
        if(prevProps.loading && !this.props.loading) {
            this.setState({
                uri:  "file:/",
                comment: ''
            })
            this.props.navigation.navigate('Feed')
        }
    }

    captureImage = () =>{
        launchCamera(this.options,(response) => {
            if(!response.didCancel) {
                //console.log(response)
                this.setState({ uri: response.assets[0].uri, base64: response.assets[0].base64})
            }
        })
    }

    pickImage = () => {
        if(!this.props.name) {
            Alert.alert('Ops!', noUser)
            return
        }

        launchImageLibrary(this.options, (response) => {
            if (!response.didCancel) {
               this.setState({ uri: response.assets[0].uri, base64: response.assets[0].base64})
            }
        });
    };

    save = async () => {
        if(!this.props.name) {
            Alert.alert('Ops!', noUser)
            return
        }

        this.props.onAddPost({
            id: Math.random(),
            nickname: this.props.name,
            email: this.props.email,
            image: {uri: this.state.uri},
            base64: this.state.base64,
            comments: [{
                nickname: this.props.name,
                comment: this.state.comment
            }]
        })

    }

    render() {
        return(
            <ScrollView>
                <View style={styles.container}>
                    <Text style={styles.title}>Compartilhe uma imagem</Text>
                    <View style={styles.imageContainer}>
                        <Image source={{ uri: this.state.uri }} style={styles.image} />
                    </View>
                    <TouchableOpacity onPress={this.pickImage} style={styles.buttom} >
                        <Text style={styles.buttomText}>Escolha a foto</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={this.captureImage} style={styles.buttom} >
                        <Text style={styles.buttomText}>Tire uma foto</Text>
                    </TouchableOpacity>
                    <TextInput placeholder='Algum comentário para a foto?' 
                        style={styles.input}
                        value={this.state.comment}
                        editable={this.props.name != null}
                        onChangeText={comment => this.setState({ comment })} />
                    <TouchableOpacity onPress={this.save}
                        disabled={this.props.loading}
                        style={[styles.buttom, this.props.loading ? styles.buttomDisabled : null]}>
                    <Text style={styles.buttomText}>Salvar</Text>
                    </TouchableOpacity>
                </View>
            </ScrollView>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center'
    },
    title: {
        fontSize: 20,
        marginTop: Platform.OS === 'ios' ? 30 : 10,
        fontWeight: 'bold'
    },
    imageContainer:{
        width: '90%',
        height: Dimensions.get('window').width / 2,
        backgroundColor: '#EEE',
        marginTop: 10
    },
    image: {
        width: Dimensions.get('window').width, 
        height: Dimensions.get('window').width / 2,
        resizeMode: 'center'
    },
    buttom: {
        marginTop: 30,
        padding: 10,
        backgroundColor: '#4286f4'
    },
    buttomText: {
        fontSize: 20,
        color: '#FFF'
    },
    input: {
        marginTop: 20,
        width: '90%'
    },
    buttomDisabled: {
        backgroundColor: '#AAA'
    }
})

const mapStateToProps = ({ user, posts }) => {
    return {
        email: user.email,
        name: user.name,
        loading: posts.isUploading
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onAddPost: post => dispatch(addPost(post))
    }
}

export default connect(mapStateToProps, mapDispatchToProps) (AddPhoto)
//export default AddPhoto