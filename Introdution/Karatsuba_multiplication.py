"""
Input: two n-digit numbers X and Y
Output: the product X * Y
"Primitive Operation": add or multiply 2 single-digit numbers
Upshot: operations overall constant n^2

---- Algorithm------
    Input:
        x = 56|78 # a = 56 b = 75
        y = 12|34 # c = 12 d = 34
    Algorithm steps:
        step_1: compute a * c = 672
        step_2: compute d * d = 2652
        step_3: compute (a + b) * (c + d) = 134 * 46 = 6164
        step_4: compute (3) - (2) - (1) = 6164 - 2652 - 672 = 2840

                A Recursive Algorithm
                
    write: x = 10^(n/2) * a + b   and   y = 10^(n/2)c + d
    where a,b,c,d are (n/2) - digit numbers.
    Example:
        a = 56, b = 78, c = 12, d = 34
    Than:
        x * y = ( 10^(n)*a*c + 10^(n/2)(ad * bc) + bd
        
                Karatsuba Multiplication
    Recall:
        x * y = ( 10^(n)*a*c + 10^(n/2)(ad * bc) + bd
    step_1: recursively compute ac
    step_2: recursively compute bd
    step_3: recursively compute (a + b)(c + d) = ac + ad + bc + bd
    step_4: (3) - (1) - (2) = ad + bc
    Upshot: only need 3 recursive multiplications!(and some additions)

    1. Break the two integers x and y into a, b, c and d as described above
    2. Recursively compute ac
    3. Recursively compute bd
    4. Recursively compute (a + b)(c + d)
    5. Calculate (ab + bc) as (a + b)(c + d) – ac – bd
    6. Let A be ac with n zeros added to the end
    7. let B be (ab + bc) with half n zeros added to the end
    8. The final answer is A + B + bd
"""


def zeroPad(numberString, zeros, left=True):
    """Return the string with zeros added to the left or right."""
    for i in range(zeros):
        if left:
            numberString = '0' + numberString
        else:
            numberString = numberString + '0'
    return numberString


def karatsubaMultiplication(x ,y):
    """Multiply two integers using Karatsuba's algorithm."""
    #convert to strings for easy access to digits
    x = str(x)
    y = str(y)
    #base case for recursion
    if len(x) == 1 and len(y) == 1:
        return int(x) * int(y)
    if len(x) < len(y):
        x = zeroPad(x, len(y) - len(x))
    elif len(y) < len(x):
        y = zeroPad(y, len(x) - len(y))
    n = len(x)
    j = n//2
    #for odd digit integers
    if (n % 2) != 0:
        j += 1
    BZeroPadding = n - j
    AZeroPadding = BZeroPadding * 2
    a = int(x[:j])
    b = int(x[j:])
    c = int(y[:j])
    d = int(y[j:])
    #recursively calculate
    ac = karatsubaMultiplication(a, c)
    bd = karatsubaMultiplication(b, d)
    k = karatsubaMultiplication(a + b, c + d)
    A = int(zeroPad(str(ac), AZeroPadding, False))
    B = int(zeroPad(str(k - ac - bd), BZeroPadding, False))
    return A + B + bd

print(karatsubaMultiplication(585,9898))