import React, { Component } from 'react';
import { Text, TextInput, TouchableOpacity, LayoutAnimation, View, Dimensions, StyleSheet } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import Colors from '../constants/Colors';
import { Button } from 'react-native-elements';


class SearchComponent extends Component {
	constructor(props) {
		super(props);
		this.state = {
			searching: false
		}
	}

	componentWillUpdate() {
		LayoutAnimation.linear();
	}

	onSearchActive = () => {
		this.setState({ searching: true })
	}

	componentDidMount() {
		this.refs.search_textinput_component.focus()
	}

	showCancelButton() {
		if (this.state.searching) {

			return (
				<Button
				  title="Cancel"
				  fontSize={14}
				  backgroundColor={Colors.tintColor}
				  onPress={() => {this.setState({ searching: false })}}
				/>
			);
		}

	}

	render (){
		return (
			<View style={styles.SearchContainer}>
			  <TouchableOpacity
			    style={{ elevation: 4 }}
			  	onPress={this.onSearchActive}
			  >
			    <View style={styles.touchableSearch}>
				  <View style={[styles.insideTouchableView, this.state.searching && styles.altTouchableView]}>
				    <View style={{ backgroundColor: Colors.darkTintColor}}>
						<FontAwesome
							name={'search'}
							size={14}
							color='white'
						/>
					</View>
					<TextInput
					    ref="search_textinput_component"
						autoCorrect={false}
						placeholderTextColor='white'
						keyboardType={'web-search'}
						onFocus={this.onSearchActive}
						placeholder="Search DuckDuckGo"
						style={[styles.customSearchTextInputStyle,]}
					/>
				  </View>
				</View>
			  </TouchableOpacity>
			  {this.showCancelButton()}

			</View>
		);
	}
};

const styles = StyleSheet.create({
	SearchContainer: {
		padding: 5,
		flex: 1,
		alignItems: 'center',
		flexDirection: 'row',
		backgroundColor: Colors.tintColor
	},
	touchableSearch: {
		backgroundColor: Colors.darkTintColor,
		borderRadius: 4,
		padding: 7,
		alignItems: 'center',
		justifyContent: 'space-around',
	},
	insideTouchableView: {
		width: Dimensions.get('window').width - 25,
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'center',
	},
	altTouchableView:{
		width: 275,
	},
	altSearchTextInput: {
		width: 150,
	},
	customSearchTextInputStyle:{
		height: 24,
		width: 150,
		fontSize: 14,
		marginLeft: 7,
		color: 'white',
	},
});

export default SearchComponent;