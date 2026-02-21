window.BENCHMARK_DATA = {
  "lastUpdate": 1771651546768,
  "repoUrl": "https://github.com/erock530/gocloak",
  "entries": {
    "Benchmark": [
      {
        "commit": {
          "author": {
            "email": "56282917+erock530@users.noreply.github.com",
            "name": "Eric",
            "username": "erock530"
          },
          "committer": {
            "email": "56282917+erock530@users.noreply.github.com",
            "name": "Eric",
            "username": "erock530"
          },
          "distinct": true,
          "id": "e1d66b081c05049fb16d267a3e505884d0663f93",
          "message": "ci: set git identity for gh-pages init step\n\nConfigure user.name and user.email before commit to fix 'Author identity\nunknown' error when creating the gh-pages branch.\n\nCo-authored-by: Cursor <cursoragent@cursor.com>",
          "timestamp": "2026-02-21T05:22:32Z",
          "tree_id": "7f868490e023232d0bdb9ae18e06fe9904e8fbc3",
          "url": "https://github.com/erock530/gocloak/commit/e1d66b081c05049fb16d267a3e505884d0663f93"
        },
        "date": 1771651546163,
        "tool": "go",
        "benches": [
          {
            "name": "BenchmarkLogin",
            "value": 33883018,
            "unit": "ns/op\t   78000 B/op\t     174 allocs/op",
            "extra": "33 times"
          },
          {
            "name": "BenchmarkLogin - ns/op",
            "value": 33883018,
            "unit": "ns/op",
            "extra": "33 times"
          },
          {
            "name": "BenchmarkLogin - B/op",
            "value": 78000,
            "unit": "B/op",
            "extra": "33 times"
          },
          {
            "name": "BenchmarkLogin - allocs/op",
            "value": 174,
            "unit": "allocs/op",
            "extra": "33 times"
          },
          {
            "name": "BenchmarkLogin",
            "value": 35216541,
            "unit": "ns/op\t   68251 B/op\t     175 allocs/op",
            "extra": "34 times\n2 procs"
          },
          {
            "name": "BenchmarkLogin - ns/op",
            "value": 35216541,
            "unit": "ns/op",
            "extra": "34 times\n2 procs"
          },
          {
            "name": "BenchmarkLogin - B/op",
            "value": 68251,
            "unit": "B/op",
            "extra": "34 times\n2 procs"
          },
          {
            "name": "BenchmarkLogin - allocs/op",
            "value": 175,
            "unit": "allocs/op",
            "extra": "34 times\n2 procs"
          },
          {
            "name": "BenchmarkLoginParallel",
            "value": 33812878,
            "unit": "ns/op\t   81489 B/op\t     175 allocs/op",
            "extra": "32 times"
          },
          {
            "name": "BenchmarkLoginParallel - ns/op",
            "value": 33812878,
            "unit": "ns/op",
            "extra": "32 times"
          },
          {
            "name": "BenchmarkLoginParallel - B/op",
            "value": 81489,
            "unit": "B/op",
            "extra": "32 times"
          },
          {
            "name": "BenchmarkLoginParallel - allocs/op",
            "value": 175,
            "unit": "allocs/op",
            "extra": "32 times"
          },
          {
            "name": "BenchmarkGetGroups",
            "value": 1201641,
            "unit": "ns/op\t   36433 B/op\t     100 allocs/op",
            "extra": "1050 times"
          },
          {
            "name": "BenchmarkGetGroups - ns/op",
            "value": 1201641,
            "unit": "ns/op",
            "extra": "1050 times"
          },
          {
            "name": "BenchmarkGetGroups - B/op",
            "value": 36433,
            "unit": "B/op",
            "extra": "1050 times"
          },
          {
            "name": "BenchmarkGetGroups - allocs/op",
            "value": 100,
            "unit": "allocs/op",
            "extra": "1050 times"
          },
          {
            "name": "BenchmarkGetGroups",
            "value": 1085577,
            "unit": "ns/op\t   36434 B/op\t     100 allocs/op",
            "extra": "1033 times\n2 procs"
          },
          {
            "name": "BenchmarkGetGroups - ns/op",
            "value": 1085577,
            "unit": "ns/op",
            "extra": "1033 times\n2 procs"
          },
          {
            "name": "BenchmarkGetGroups - B/op",
            "value": 36434,
            "unit": "B/op",
            "extra": "1033 times\n2 procs"
          },
          {
            "name": "BenchmarkGetGroups - allocs/op",
            "value": 100,
            "unit": "allocs/op",
            "extra": "1033 times\n2 procs"
          },
          {
            "name": "BenchmarkGetGroupsFull",
            "value": 1037028,
            "unit": "ns/op\t   37598 B/op\t     120 allocs/op",
            "extra": "1130 times"
          },
          {
            "name": "BenchmarkGetGroupsFull - ns/op",
            "value": 1037028,
            "unit": "ns/op",
            "extra": "1130 times"
          },
          {
            "name": "BenchmarkGetGroupsFull - B/op",
            "value": 37598,
            "unit": "B/op",
            "extra": "1130 times"
          },
          {
            "name": "BenchmarkGetGroupsFull - allocs/op",
            "value": 120,
            "unit": "allocs/op",
            "extra": "1130 times"
          },
          {
            "name": "BenchmarkGetGroupsFull",
            "value": 980934,
            "unit": "ns/op\t   37955 B/op\t     120 allocs/op",
            "extra": "1162 times\n2 procs"
          },
          {
            "name": "BenchmarkGetGroupsFull - ns/op",
            "value": 980934,
            "unit": "ns/op",
            "extra": "1162 times\n2 procs"
          },
          {
            "name": "BenchmarkGetGroupsFull - B/op",
            "value": 37955,
            "unit": "B/op",
            "extra": "1162 times\n2 procs"
          },
          {
            "name": "BenchmarkGetGroupsFull - allocs/op",
            "value": 120,
            "unit": "allocs/op",
            "extra": "1162 times\n2 procs"
          },
          {
            "name": "BenchmarkGetGroupsBrief",
            "value": 878879,
            "unit": "ns/op\t   37928 B/op\t     120 allocs/op",
            "extra": "1350 times"
          },
          {
            "name": "BenchmarkGetGroupsBrief - ns/op",
            "value": 878879,
            "unit": "ns/op",
            "extra": "1350 times"
          },
          {
            "name": "BenchmarkGetGroupsBrief - B/op",
            "value": 37928,
            "unit": "B/op",
            "extra": "1350 times"
          },
          {
            "name": "BenchmarkGetGroupsBrief - allocs/op",
            "value": 120,
            "unit": "allocs/op",
            "extra": "1350 times"
          },
          {
            "name": "BenchmarkGetGroupsBrief",
            "value": 923713,
            "unit": "ns/op\t   38711 B/op\t     120 allocs/op",
            "extra": "1252 times\n2 procs"
          },
          {
            "name": "BenchmarkGetGroupsBrief - ns/op",
            "value": 923713,
            "unit": "ns/op",
            "extra": "1252 times\n2 procs"
          },
          {
            "name": "BenchmarkGetGroupsBrief - B/op",
            "value": 38711,
            "unit": "B/op",
            "extra": "1252 times\n2 procs"
          },
          {
            "name": "BenchmarkGetGroupsBrief - allocs/op",
            "value": 120,
            "unit": "allocs/op",
            "extra": "1252 times\n2 procs"
          },
          {
            "name": "BenchmarkGetGroup",
            "value": 958769,
            "unit": "ns/op\t   37976 B/op\t     137 allocs/op",
            "extra": "1154 times"
          },
          {
            "name": "BenchmarkGetGroup - ns/op",
            "value": 958769,
            "unit": "ns/op",
            "extra": "1154 times"
          },
          {
            "name": "BenchmarkGetGroup - B/op",
            "value": 37976,
            "unit": "B/op",
            "extra": "1154 times"
          },
          {
            "name": "BenchmarkGetGroup - allocs/op",
            "value": 137,
            "unit": "allocs/op",
            "extra": "1154 times"
          },
          {
            "name": "BenchmarkGetGroup",
            "value": 992752,
            "unit": "ns/op\t   37926 B/op\t     137 allocs/op",
            "extra": "1167 times\n2 procs"
          },
          {
            "name": "BenchmarkGetGroup - ns/op",
            "value": 992752,
            "unit": "ns/op",
            "extra": "1167 times\n2 procs"
          },
          {
            "name": "BenchmarkGetGroup - B/op",
            "value": 37926,
            "unit": "B/op",
            "extra": "1167 times\n2 procs"
          },
          {
            "name": "BenchmarkGetGroup - allocs/op",
            "value": 137,
            "unit": "allocs/op",
            "extra": "1167 times\n2 procs"
          },
          {
            "name": "BenchmarkGetGroupByPath",
            "value": 885255,
            "unit": "ns/op\t   37662 B/op\t     123 allocs/op",
            "extra": "1248 times"
          },
          {
            "name": "BenchmarkGetGroupByPath - ns/op",
            "value": 885255,
            "unit": "ns/op",
            "extra": "1248 times"
          },
          {
            "name": "BenchmarkGetGroupByPath - B/op",
            "value": 37662,
            "unit": "B/op",
            "extra": "1248 times"
          },
          {
            "name": "BenchmarkGetGroupByPath - allocs/op",
            "value": 123,
            "unit": "allocs/op",
            "extra": "1248 times"
          },
          {
            "name": "BenchmarkGetGroupByPath",
            "value": 936315,
            "unit": "ns/op\t   38075 B/op\t     123 allocs/op",
            "extra": "1124 times\n2 procs"
          },
          {
            "name": "BenchmarkGetGroupByPath - ns/op",
            "value": 936315,
            "unit": "ns/op",
            "extra": "1124 times\n2 procs"
          },
          {
            "name": "BenchmarkGetGroupByPath - B/op",
            "value": 38075,
            "unit": "B/op",
            "extra": "1124 times\n2 procs"
          },
          {
            "name": "BenchmarkGetGroupByPath - allocs/op",
            "value": 123,
            "unit": "allocs/op",
            "extra": "1124 times\n2 procs"
          }
        ]
      }
    ]
  }
}