###第一版
```java
class Solution {
    public String intToRoman(int num) {
        Map<Integer, String> index = new HashMap();
        index.put(1000, "M");
        index.put(500, "D");
        index.put(100, "C");
        index.put(50, "L");
        index.put(10, "X");
        index.put(5, "V");
        index.put(1, "I");
        index.put(900, "CM");
        index.put(400, "CD");
        index.put(90, "XC");
        index.put(40, "XL");
        index.put(9, "IX");
        index.put(4, "IV");
        int list[] = {1000,900,500,400,100,90,50,40,10,9,5,4,1};
        StringBuilder res = new StringBuilder();
        for(int i = 0;i<list.length;i++) {
            if(num == 0) {
                break;
            }
            int tmp =  list[i];
            int divisor = num/tmp;
            if(divisor != 0) {
                num = num % tmp;
                for(int j = 0;j<divisor;j++) {
                    res.append(index.get(tmp));
                }
            }
        }
        return res.toString();
    }
}
```
###第二版
```java
class Solution {
    public String intToRoman(int num) {
        String romanlist[] = {"M","CM","D","CD","C","XC","L","XL","X","IX","V","IV","I"};
        int intlist[] = {1000,900,500,400,100,90,50,40,10,9,5,4,1};
        StringBuilder res = new StringBuilder();
        for(int i = 0;i<romanlist.length&&num>0;i++) {
            while(num >= intlist[i]) {
                num -= intlist[i];
                res.append(romanlist[i]);
            }
        }
        return res.toString();
    }
}
```