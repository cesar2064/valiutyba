function calculateMaxMovements(x1, y1, x2, y2) {
    const absX = Math.abs(x2 - x1);
    const absY = Math.abs(y2 - y1);
    if (absX == 1 && absY == 0) return 3;
    if (absY == 1 && absX == 0) return 3;
    if (absX == 2 && absY == 2) return 4;
    let lb = (absX + 1) / 2;
    let sum = absX + absY;
    lb = Math.max(lb, (absY + 1) / 2);
    lb = Math.max(lb, (sum + 2) / 3);
    lb = Math.round(lb);
    let mod = sum % 2;
    while ((lb % 2) !== mod) {
        lb++;
    }
    return lb;
}

console.log(calculateMaxMovements(-5, -5, 5, 5));