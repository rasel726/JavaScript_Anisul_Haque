// break
for (var i = 1; i <= 100; i++) {
    // document.write(" " + i);
    if (i == 10) {
        break;
    }
}

// continue
for (var i = 1; i <= 100; i++) {
    if (i == 10) {
        continue;
    }
    // document.write(" " + i);
}

// ex-2 (ekhane just jor songkha gulo print korbe)
for (var i = 1; i <= 100; i++) {
    if (i % 2 != 0) {
        continue;
    }
    document.write(" " + i);
}
