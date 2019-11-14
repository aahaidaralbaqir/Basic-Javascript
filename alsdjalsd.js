function solution (x,y) {
    let len = x.length
    let pattern = "+======+"
    let result;
    let printContent = (number) => {
        for(let i = 0; i < 6; i++) {
            let result;
            let lengthOfNumber = number.toString().length
            const withSeparator = (string) => {
                return `|${string}|`
            }
            switch(lengthOfNumber){
                case 6 :
                    result = withSeparator(number) 
                break;
                case 5 : 
                    result = withSeparator(`${number}`)
                break;
                case 4 : 
                    result = withSeparator(`${number}`)
                break;
                case 3 : 
                    result = withSeparator(`${number}`)
                break;
                case 2 : 
                    result = withSeparator(`${number}`)
                break;
                case 1 : 
                    result = withSeparator(`${number}`)
                break;
                case 0 :
                    result = withSeparator(`******`)
                break;
            }
            return result
        }
    }    
    for(let j = 0; j < len; j++){
            let content = printContent(x[j])
            console.log(`${pattern}\n${content}`)
        }
}

solution([12,444,54643,3155,667543,8673,0,369,7516,335],4)






function solution (x,y) {
    // cari maksimal
    let max = Math.max(...x)
    let len = max.toString().length
    let selisih;
    let counter = 0
    let fullContent = ""
    for(let i = 0; i < x.length; i++) {
        selisih = len - x[i].toString().length
        let pattern = ""

        for(let j = 0; j < selisih; j++){
          pattern += "*"
        }
        let content =`${pattern}${x[i]}`
        fullContent = fullContent + content
        if(counter == y - 1){
            fullContent = ${fullContent} + ${content} \n`
        }
        fullContent = ${fullContent} + ${content}

        counter++
    }
    console.log(fullContent);
    // for(let j = 0; j < len; j++){
        
    // }

}

solution([12,444,54643,3155,667543,8673,0,369,7516,335],4)


