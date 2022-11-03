import React, { Component } from "react";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import Pagination from "../components/common/Pagination";
import { paginate } from "../utils/paginate";
import { getMovies } from "../services/fakeMovieService";
import empty from "../images/empty.png";

class BlogHome extends Component {
  state = {
    movies: [],
    pageSize: 4,
    currentPage: 1,
  };

  componentDidMount() {
    this.setState({ movies: getMovies() });
  }
  handlePageChange = (page) => {
    this.setState({ currentPage: page });
  };
  getPageData = () => {
    const { pageSize, currentPage, movies: allMovies } = this.state;
    let filtered = allMovies.filter((m) => m.title.toLowerCase());
    const movies = paginate(filtered, currentPage, pageSize);
    return { movies };
  };

  render() {
    const { pageSize, currentPage } = this.state;
    const { length: count } = this.state.movies;
    if (count === 0) return <p>There are no movies in the database</p>;

    const { movies } = this.getPageData();
    console.log(movies);
    return (
      <div className="">
        <NavBar />
        <div className="h-[30rem] flex flex-col items-center justify-center border-t-2 border-slate-200">
          <h1 className="italic font-semibold tracking-wide text-slate-800">
            No Blog Posts yet, check back soon.
          </h1>
        </div>

        {/* <div className="flex flex-col items-center px-[2rem] h-screen lg:px-[8rem]">
          <div className="flex w-full gap-4 lg:gap-0">
            <div className="w-3/5">
              <div className="lg:w-2/3 w-full mx-auto ">
                <img src={empty} alt="" className="rounded" />
              </div>
            </div>
            <div className="w-2/5">B</div>
          </div>

          <Pagination
            itemsCount={count}
            pageSize={pageSize}
            onPageChange={this.handlePageChange}
            currentPage={currentPage}
          />
        </div> */}
        <Footer />
      </div>
    );
  }
}

export default BlogHome;
