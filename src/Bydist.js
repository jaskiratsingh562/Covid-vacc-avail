import React from "react";
import { View, TextInput, Text, TouchableOpacity } from "react-native";
import DatePicker from "@dietime/react-native-date-picker";
import styles from "./styles";
class bypin extends React.Component {
  state = {
    State: null,
    dist: null,
    date: null,
    locations: [],
    error: ""
  };

  handlestate = (value) => {
    this.setState({
      State: value
    });
  };
  handledist = (value) => {
    this.setState({
      dist: value
    });
  };
  handleDate = (value) => {
    this.setState({
      date: value
    });
  };

  proceed = () => {
    this.setState({
      error: ""
    });
    fetch("https://cdn-api.co-vin.in/api/v2/admin/location/states", {
      method: "GET",
      headers: {
        "User-Agent":
          "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_10_1) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/39.0.2171.95 Safari/537.36"
      }
    }).then((result) => {
      return result.json();
    });
    fetch(
      "https://cdn-api.co-vin.in/api/v2/appointment/sessions/public/findByDistrict?district_id=512&date=19-05-2021",
      {
        method: "GET",
        headers: {
          "User-Agent":
            "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_10_1) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/39.0.2171.95 Safari/537.36"
        }
      }
    )
      .then((res) => {
        return res.json();
      })
      .then((response) => {
        console.log(response);
        this.setState({
          locations: response["sessions"]
        });
      })
      .catch((error) => {
        this.setState({
          error: "An error occured"
        });
      });
  };

  render() {
    return (
      <View>
        <View style={{ alignItems: "center" }}>
          <TextInput
            placeholder="Enter the State"
            keyboardType={"number-pad"}
            style={styles.inputField}
            onChangeText={this.handlestate}
          />
          <TextInput
            placeholder="Enter the District"
            keyboardType={"number-pad"}
            style={styles.inputField}
            onChangeText={this.handledist}
          />
          <Text>
            {this.state.date
              ? this.state.date.toDateString()
              : "Select date..."}
          </Text>
          <DatePicker
            width={"50%"}
            startYear={2020}
            endYear={2021}
            value={this.state.date}
            onChange={this.handleDate}
            format="dd-mm-yyyy"
          />
          <TouchableOpacity onPress={this.proceed}>
            <Text style={styles.btn}>Get Info</Text>
          </TouchableOpacity>

          {this.state.locations.length === 0 ? (
            <Text
              style={{ fontSize: 19, fontWeight: "bold", marginVertical: 10 }}
            >
              No Centers Found
            </Text>
          ) : (
            <View>
              {this.state.locations.map((location, index) => {
                return (
                  <View key={index} style={styles.info}>
                    <Text style={{ fontSize: 16, fontWeight: "bold" }}>
                      {location.name}
                    </Text>
                    <Text>{location.vaccine}</Text>
                    <Text>
                      Available Vaccines: {location.available_capacity}
                    </Text>
                    <Text>Min. Age: {location.min_age_limit}</Text>
                  </View>
                );
              })}
            </View>
          )}
        </View>
      </View>
    );
  }
}
export default bypin;
