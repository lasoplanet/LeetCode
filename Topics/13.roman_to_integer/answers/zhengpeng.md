###第一版
```java
class Solution {
    public int romanToInt(String s) {
        Map<String, Integer> index = new HashMap();
        index.put("M", 1000);
        index.put("D", 500);
        index.put("C", 100);
        index.put("L", 50);
        index.put("X", 10);
        index.put("V", 5);
        index.put("I", 1);
        index.put("CM", 900);
        index.put("CD", 400);
        index.put("XC", 90);
        index.put("XL", 40);
        index.put("IX", 9);
        index.put("IV", 4);
        char sts[] = s.toCharArray();
        int res = 0;
        for(int i = 0;i<sts.length;i++) {
            char nextChar;
            if(i == sts.length - 1) {
                nextChar = sts[i];
            } else {
                nextChar = sts[i + 1];
            }
            int tmp = 0;
            if(index.get(String.valueOf(sts[i])) < index.get(String.valueOf(nextChar))) {
                tmp = index.get(String.valueOf(sts[i]) + String.valueOf(nextChar));
                i++;
            } else {
                tmp = index.get(String.valueOf(sts[i]));
            }
            res+=tmp;
        }
        return res;
    }
}
```