Package.describe({
	summary : "CodeMirror repackaged for Meteor"
});

Package.on_use(function(api) {
	var where = 'client';

	// code
	api.add_files('lib/codemirror/lib/codemirror.css', where);
	api.add_files('lib/codemirror/lib/codemirror.js', where);

	// modes
	api.add_files('lib/codemirror/mode/clike/clike.js', where);
	api.add_files('lib/codemirror/mode/clojure/clojure.js', where);
	api.add_files('lib/codemirror/mode/coffeescript/coffeescript.js', where);
	api.add_files('lib/codemirror/mode/css/css.js', where);
	api.add_files('lib/codemirror/mode/diff/diff.js', where);
	api.add_files('lib/codemirror/mode/ecl/ecl.js', where);
	api.add_files('lib/codemirror/mode/erlang/erlang.js', where);
	api.add_files('lib/codemirror/mode/gfm/gfm.js', where);
	api.add_files('lib/codemirror/mode/go/go.js', where);
	api.add_files('lib/codemirror/mode/groovy/groovy.js', where);
	api.add_files('lib/codemirror/mode/haskell/haskell.js', where);
	api.add_files('lib/codemirror/mode/haxe/haxe.js', where);
	api.add_files('lib/codemirror/mode/htmlembedded/htmlembedded.js', where);
	api.add_files('lib/codemirror/mode/htmlmixed/htmlmixed.js', where);
	api.add_files('lib/codemirror/mode/javascript/javascript.js', where);
	api.add_files('lib/codemirror/mode/jinja2/jinja2.js', where);
	api.add_files('lib/codemirror/mode/less/less.js', where);
	api.add_files('lib/codemirror/mode/lua/lua.js', where);
	api.add_files('lib/codemirror/mode/markdown/markdown.js', where);
	api.add_files('lib/codemirror/mode/mysql/mysql.js', where);
	api.add_files('lib/codemirror/mode/ntriples/ntriples.js', where);
	api.add_files('lib/codemirror/mode/ocaml/ocaml.js', where);
	api.add_files('lib/codemirror/mode/pascal/pascal.js', where);
	api.add_files('lib/codemirror/mode/perl/perl.js', where);
	api.add_files('lib/codemirror/mode/php/php.js', where);
	api.add_files('lib/codemirror/mode/pig/pig.js', where);
	api.add_files('lib/codemirror/mode/plsql/plsql.js', where);
	api.add_files('lib/codemirror/mode/properties/properties.js', where);
	api.add_files('lib/codemirror/mode/python/python.js', where);
	api.add_files('lib/codemirror/mode/r/r.js', where);
	api.add_files('lib/codemirror/mode/rpm/changes/changes.js', where);
	api.add_files('lib/codemirror/mode/rpm/spec/spec.js', where);
	api.add_files('lib/codemirror/mode/rst/rst.js', where);
	api.add_files('lib/codemirror/mode/ruby/ruby.js', where);
	api.add_files('lib/codemirror/mode/rust/rust.js', where);
	api.add_files('lib/codemirror/mode/scheme/scheme.js', where);
	api.add_files('lib/codemirror/mode/shell/shell.js', where);
	api.add_files('lib/codemirror/mode/sieve/sieve.js', where);
	api.add_files('lib/codemirror/mode/smalltalk/smalltalk.js', where);
	api.add_files('lib/codemirror/mode/smarty/smarty.js', where);
	api.add_files('lib/codemirror/mode/sparql/sparql.js', where);
	api.add_files('lib/codemirror/mode/stex/stex.js', where);
	api.add_files('lib/codemirror/mode/tiddlywiki/tiddlywiki.js', where);
	api.add_files('lib/codemirror/mode/tiki/tiki.js', where);
	api.add_files('lib/codemirror/mode/vb/vb.js', where);
	api.add_files('lib/codemirror/mode/vbscript/vbscript.js', where);
	api.add_files('lib/codemirror/mode/velocity/velocity.js', where);
	api.add_files('lib/codemirror/mode/verilog/verilog.js', where);
	api.add_files('lib/codemirror/mode/xml/xml.js', where);
	api.add_files('lib/codemirror/mode/xquery/xquery.js', where);
	api.add_files('lib/codemirror/mode/yaml/yaml.js', where);

	// themes
	api.add_files('lib/codemirror/theme/ambiance.css', where);
	api.add_files('lib/codemirror/theme/blackboard.css', where);
	api.add_files('lib/codemirror/theme/cobalt.css', where);
	api.add_files('lib/codemirror/theme/eclipse.css', where);
	api.add_files('lib/codemirror/theme/elegant.css', where);
	api.add_files('lib/codemirror/theme/erlang-dark.css', where);
	api.add_files('lib/codemirror/theme/lesser-dark.css', where);
	api.add_files('lib/codemirror/theme/monokai.css', where);
	api.add_files('lib/codemirror/theme/neat.css', where);
	api.add_files('lib/codemirror/theme/night.css', where);
	api.add_files('lib/codemirror/theme/rubyblue.css', where);
	api.add_files('lib/codemirror/theme/vibrant-ink.css', where);
	api.add_files('lib/codemirror/theme/xq-dark.css', where);
});
