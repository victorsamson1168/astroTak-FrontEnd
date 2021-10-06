import React, { useEffect, useState } from "react";
import { apiHolder } from "../../ApiService";
import AstrologerCardList from "../../components/AstrologerCardList/AstrologerCardList";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import styles from "./styles.css";
import { Button, Input, Menu, Dropdown, Radio, Checkbox } from "antd";
import { SearchOutlined, CloseOutlined } from "@ant-design/icons";
import searchimg from "../../assets/search.png";
import filterimg from "../../assets/filter.png";
import sorting from "../../assets/sort.png";

const TalkToAstrologer = () => {
  const [astro, setAstro] = useState([]);
  const [search, setSearch] = useState("");
  const [tempAstro, setTempAstro] = useState([]);
  const [value, setValue] = useState();
  const [showSearch, setShowSearch] = useState(false);

  const onChange = (e) => {
    console.log("radio checked", e.target.value);
    setValue(e.target.value);
    if (e.target.value === 0) {
      tempAstro.sort((a, b) => (a.experience < b.experience ? 1 : -1));
    } else if (e.target.value === 1) {
      tempAstro.sort((a, b) => (a.experience > b.experience ? 1 : -1));
    } else if (e.target.value === 2) {
      tempAstro.sort((a, b) =>
        a.minimumCallDurationCharges < b.minimumCallDurationCharges ? 1 : -1
      );
    } else if (e.target.value === 3) {
      tempAstro.sort((a, b) =>
        a.minimumCallDurationCharges > b.minimumCallDurationCharges ? 1 : -1
      );
    }
  };

  const fetchAstro = async () => {
    try {
      const response = await apiHolder.getAstro();
      if (response?.status === 200) {
        setAstro(response.data.data);
        setTempAstro(response.data.data);
      } else {
        console.log("something went wrong");
      }
    } catch (error) {
      console.log("error", error);
    }
  };

  useEffect(() => {
    fetchAstro();
  }, []);

  const renderListOfAstrologer = () => {
    return tempAstro.map((data, index) => {
      return <AstrologerCardList key={index} astroDataSingle={data} />;
    });
  };

  const arraySearch = (keyword) => {
    const searchTerm = keyword.toLowerCase();
    return astro.filter((value) => {
      return (
        value.firstName?.toLowerCase().match(new RegExp(searchTerm, "g")) ||
        value.lastName?.toLowerCase().match(new RegExp(searchTerm, "g")) ||
        value.skills
          .toString()
          ?.toLowerCase()
          .match(new RegExp(searchTerm, "g")) ||
        value.languages
          .toString()
          ?.toLowerCase()
          .match(new RegExp(searchTerm, "g"))
      );
    });
  };

  const menu = (
    <Menu>
      <p className="sortByText"> Sort by</p>
      <Menu.Divider />
      <Radio.Group onChange={onChange} value={value}>
        <Menu.Item key="0">
          <Radio value={0}>Experience: High to low</Radio>
        </Menu.Item>
        <Menu.Item key="1">
          <Radio value={1}>Experience: low to high</Radio>
        </Menu.Item>
        <Menu.Item key="2">
          <Radio value={2}>Price: High to low</Radio>
        </Menu.Item>
        <Menu.Item key="3">
          <Radio value={3}>Price: low to high</Radio>
        </Menu.Item>
      </Radio.Group>
    </Menu>
  );

  const filterChange = (e) => {
    console.log(e.toString().toLowerCase());
    if(e.length === 0){
      setTempAstro(astro);
    }
    let tempArray = astro;

    e.forEach((element) => {
      tempArray = tempArray.filter((value) => {
        return (
          value.firstName?.toLowerCase().match(new RegExp(element, "g")) ||
          value.lastName?.toLowerCase().match(new RegExp(element, "g")) ||
          value.skills
            .toString()
            ?.toLowerCase()
            .match(new RegExp(element, "g")) ||
          value.languages
            .toString()
            ?.toLowerCase()
            .match(new RegExp(element, "g"))
        );
      });
      setTempAstro(tempArray);
    });
  };

  const filtermenu = (
    <Menu>
      <p className="sortByText"> Filter by</p>
      <Menu.Divider />
      <Checkbox.Group
        options={[
          "vastu",
          "palmistry",
          "hindi",
          "english",
          "bengali",
          "nepali",
        ]}
        onChange={filterChange}
        className="filterGroup"
      ></Checkbox.Group>
    </Menu>
  );

  return (
    <div>
      <Navbar></Navbar>
      <br />
      <br /><br />
      <div className="talkToAstrologerHeadingContainer">
        <p className="talkToAstrologerHeading">Talk to Astrologer</p>
        <div className="rightButtonContainer">
          <Button onClick={
            () => {
              setShowSearch(!showSearch)
            }
          }>
            <img src={searchimg} className="settingsImages"></img>
          </Button>

          <Dropdown overlay={menu} trigger={["click"]}>
            <a
              className="ant-dropdown-link"
              onClick={(e) => e.preventDefault()}
            >
              <Button>
                <img src={sorting} className="settingsImages" />
              </Button>
            </a>
          </Dropdown>
          <Dropdown overlay={filtermenu} trigger={["click"]}>
            <a
              className="ant-dropdown-link"
              onClick={(e) => e.preventDefault()}
            >
              <Button>
                <img src={filterimg} className="settingsImages"></img>
              </Button>
            </a>
          </Dropdown>
        </div>
      </div>
      <div className={showSearch?null:"hideSearch"} >
      <Input
        prefix={<SearchOutlined style={{ color: "#fc944b" }} />}
        style={{ width: "80vw" }}
        placeholder="Search for astrologers"
        value={search}
        onChange={(e) => {
          setSearch(e.target.value);
          setTempAstro(arraySearch(e.target.value));
        }}
      ></Input>
      <Button onClick={
        () => {
          setSearch("");
          setTempAstro(arraySearch(""));
        }
      }><CloseOutlined style={{ color: "#fc944b" }} /></Button>
      </div>

      <div className="mainAstroListContainer">{renderListOfAstrologer()}</div>
      <br />
      <br />

      <Footer></Footer>
    </div>
  );
};

export default TalkToAstrologer;
