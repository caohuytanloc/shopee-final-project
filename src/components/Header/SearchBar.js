import React, { Component } from "react";

export default class SearchBar extends Component {
  render() {
    return (
      <>
        <div className="shopee-searchbar__main">
          <form role="search">
            <input
              aria-label="Tìm kiếm sản phẩm"
              className="shopee-searchbar-input__input"
              autoComplete="off"
              placeholder="Tìm kiếm sản phẩm ngay"
              maxLength="128"
            
            />
          </form>
        </div>
      </>
    );
  }
}
