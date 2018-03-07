import React, { Component } from "react";
import PropTypes from "prop-types";
import {
    StyleSheet,
    Text,
    Image,
    View,
    TouchableOpacity,
    TextInput,
    CameraRoll
} from "react-native";
import Icon from "react-native-vector-icons/Ionicons";
import Util from "./utils";

class FunctionView extends Component {
    static defaultProps = {
        numOfText: 140
    };

    static propTypes = {
        numOfText: PropTypes.number.isRequired
    };

    constructor() {
        super();
        this.state = {
            images: []
        };
    }

    componentDidMount() {
        const fetchParams = {
            first: 4
        };
        CameraRoll.getPhotos(fetchParams)
            .then(data => this._storeImages(data))
            .catch();
    }

    _storeImages(data) {
        const assets = data.edges;
        const images = assets.map(asset => asset.node.image);
        this.setState({
            images
        });
    }

    render() {
        return (
            <View style={styles.container}>
                <View style={styles.iconContainer}>
                    <View style={styles.icon}>
                        <Icon name="ios-pin" size={23} color="#8899a5" />
                        <Icon name="md-camera" size={23} color="#8899a5" />
                        <Icon name="md-image" size={23} color="#8899a5" />
                        <Icon name="md-pie" size={23} color="#8899a5" />
                    </View>
                    <View style={styles.btnContanier}>
                        <Text style={styles.text}>{this.props.numOfText}</Text>
                        <TouchableOpacity
                            style={
                                this.props.numOfText === 140
                                    ? styles.btn
                                    : styles.activeBtn
                            }
                        >
                            <Text
                                style={
                                    this.props.numOfText === 140
                                        ? styles.btnText
                                        : styles.activeBtnText
                                }
                            >
                                Tweet
                            </Text>
                        </TouchableOpacity>
                    </View>
                </View>
                <View style={styles.imageGrid}>
                    <View style={styles.imageIcon}>
                        <Icon name="ios-camera" size={80} color="#2aa2ef" />
                    </View>
                    <View style={styles.imageIcon}>
                        <Icon name="ios-videocam" size={80} color="#2aa2ef" />
                    </View>
                    {this.state.images.map((image, index) => (
                        <View key={index} style={styles.imageIcon}>
                            <Image
                                style={styles.image}
                                source={{ uri: image.uri }}
                            />
                        </View>
                    ))}
                </View>
            </View>
        );
    }
}

export default FunctionView;

const styles = StyleSheet.create({
    container: {
        height: 275,
        width: 375,
        position: "absolute",
        left: 0,
        bottom: 0,
        borderTopWidth: 1,
        borderBottomColor: "#ccd6dd"
    },
    iconContainer: {
        height: 50,
        alignItems: "center",
        justifyContent: "space-between",
        flexDirection: "row",
        borderBottomWidth: 1,
        borderBottomColor: "#ccd6dd"
    },
    icon: {
        width: 210,
        flexDirection: "row",
        justifyContent: "space-around"
    },
    btnContanier: {
        width: 110,
        flexDirection: "row",
        justifyContent: "space-around",
        alignItems: "center"
    },
    btn: {
        height: 35,
        width: 60,
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 6,
        borderWidth: 1,
        borderColor: "#ccd6dd"
    },
    activeBtn: {
        height: 35,
        width: 60,
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 6,
        backgroundColor: "#2aa2ef"
    },
    text: {
        color: "#ccd6dd",
        fontSize: 18
    },
    btnText: {
        color: "#ccd6dd",
        fontSize: 14
    },
    activeBtnText: {
        color: "#fff"
    },
    imageGrid: {
        flexDirection: "row",
        flexWrap: "wrap"
    },
    imageIcon: {
        width: Util.size.width / 3,
        height: 113,
        alignItems: "center",
        justifyContent: "center",
        borderRightColor: "#ddd",
        borderBottomColor: "#ddd",
        borderRightWidth: 1,
        borderBottomWidth: 1
    },
    image: {
        width: Util.size.width / 3,
        height: 113
    }
});
