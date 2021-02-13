const express = require("express");
const path = require("path");
const exphbs = require("express-handlebars");
const movies = require("./movies.js");
const app = express();

app.set("views", path.join(__dirname, "views"));

app.engine("handlebars", exphbs({
	defaultLayout: "main",
	layoutsDir: path.join(__dirname, "views/layout")
}));

app.set("view engine", "handlebars");

app.use(express.static(path.join(__dirname,"public")));

app.get("/", (req, res) => {
	res.render("home");
});

//get de la lista desordenada
app.get("/movie-list", (req, res) => {
	movies.getAllMovies(movieList => {
		if (movieList) {
			res.render("movie-list", {movies: movieList});
		} else {
				res.render("error",({msg:"En este momento no se puede consultar las películas, intenté nuevamente más tarde"}));
		}
	});
});

// get de la lista ordenada
app.get("/movie-list/:sort", (req, res) => {
	movies.getAllMovies(movieList => {
		if (movieList) {
			movies.getSortedMovies(req.params.sort, movieList, orderedList => {				
				switch (req.params.sort) {
					case "sort-by-name-asc":
						res.render("movie-list", {movies: orderedList, sortByNameAsc:"sortByNameAsc"});
						break;

					case "sort-by-name-desc":
						res.render("movie-list", {movies: orderedList, sortByNameDesc:"sortByNameDesc"});
						break;

					case "sort-by-year-asc":
						res.render("movie-list", {movies: orderedList, sortByYearAsc:"sortByYearAsc"});
						break;

					case "sort-by-year-desc":
						res.render("movie-list", {movies: orderedList, sortByYearAsc:"sortByYearDesc"});
						break;
						
					default:
						res.render("error", {msg:"En este momento no se puede realizar lo solicitado. Intente nuevamente más tarde por favor." });			
						break;
				}
			});
		} else {
			res.render("error", {msg:"En este momento no se puede realizar lo solicitado. Intente nuevamente más tarde por favor." });
		}
	});
});

//get de la película
app.get("/movie-detail/:id", (req, res) => {
	movies.getMovieById(req.params.id, movie => {
		if (movie) {
			res.render("movie-detail", { movie });
		} else {
				res.render("error", {msg:"En este momento no se puede consultar los datos de esta película. Intente nuevamente más tarde por favor." })
		}
	});
});

app.listen(4000, () => {
	console.log("Server iniciado en:'localhost:4000'");
});